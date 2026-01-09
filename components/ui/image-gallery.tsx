"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { FinalImageGroup } from "@/lib/images";

interface ImageGalleryProps {
  groups: FinalImageGroup[];
  serviceName?: string;
}

export function ImageGallery({ groups, serviceName }: ImageGalleryProps) {
  const baseAlt = serviceName || "Rénovation";
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flatten all images into a single array with metadata
  const allImages = groups.flatMap((group) =>
    group.images.map((image, idx) => ({
      src: image,
      alt: `${baseAlt} - Projet ${group.projectNumber}${group.images.length > 1 ? `, vue ${idx + 1}` : ""}`,
    }))
  );

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  }, [allImages.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  }, [allImages.length]);

  if (groups.length === 0) return null;

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold text-primary text-center">Galerie</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {allImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => openLightbox(index)}
            className="relative aspect-[4/3] overflow-hidden rounded-lg w-full max-w-sm cursor-pointer group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent showCloseButton={false} className="max-w-5xl w-[calc(100%-2rem)] h-[85vh] p-0 bg-black/95 border-none rounded-lg">
          <DialogTitle className="sr-only">Image {currentIndex + 1} sur {allImages.length}</DialogTitle>

          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <Image
              src={allImages[currentIndex].src}
              alt={allImages[currentIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Navigation */}
          {allImages.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 h-12 w-12"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 h-12 w-12"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                {currentIndex + 1} / {allImages.length}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
