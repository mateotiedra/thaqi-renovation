import fs from "fs";
import path from "path";

export interface BeforeAfterPair {
  before: string;
  after: string[];
  projectNumber: number;
}

export interface FinalImageGroup {
  projectNumber: number;
  images: string[];
}

export interface RenovationImages {
  beforeAfterPairs: BeforeAfterPair[];
  finalImages: FinalImageGroup[];
  previewImage: string | null;
}

export function getRenovationImages(slug: string): RenovationImages {
  const basePath = `/assets/images/renovation/${slug}`;
  const fullPath = path.join(process.cwd(), "public", "assets", "images", "renovation", slug);

  const result: RenovationImages = {
    beforeAfterPairs: [],
    finalImages: [],
    previewImage: null,
  };

  if (!fs.existsSync(fullPath)) {
    return result;
  }

  const files = fs.readdirSync(fullPath);

  // Parse avant (before) images
  const avantFiles = files.filter((f) => f.startsWith("avant-"));
  const avantMap = new Map<number, string>();

  for (const file of avantFiles) {
    const match = file.match(/avant-(\d+)\.jpg/);
    if (match) {
      avantMap.set(parseInt(match[1]), `${basePath}/${file}`);
    }
  }

  // Parse apres (after) images
  const apresFiles = files.filter((f) => f.startsWith("apres-"));
  const apresMap = new Map<number, string[]>();

  for (const file of apresFiles) {
    const match = file.match(/apres-(\d+)[a-z]?\.jpg/);
    if (match) {
      const num = parseInt(match[1]);
      if (!apresMap.has(num)) {
        apresMap.set(num, []);
      }
      apresMap.get(num)!.push(`${basePath}/${file}`);
    }
  }

  // Create before/after pairs
  for (const [num, beforePath] of avantMap) {
    const afterPaths = apresMap.get(num) || [];
    if (afterPaths.length > 0) {
      result.beforeAfterPairs.push({
        projectNumber: num,
        before: beforePath,
        after: afterPaths.sort(),
      });
    }
  }
  result.beforeAfterPairs.sort((a, b) => a.projectNumber - b.projectNumber);

  // Parse final images
  const finalFiles = files.filter((f) => f.startsWith("final-"));
  const finalMap = new Map<number, string[]>();

  for (const file of finalFiles) {
    const match = file.match(/final-(\d+)[a-z]?\.jpg/);
    if (match) {
      const num = parseInt(match[1]);
      if (!finalMap.has(num)) {
        finalMap.set(num, []);
      }
      finalMap.get(num)!.push(`${basePath}/${file}`);
    }
  }

  for (const [num, images] of finalMap) {
    result.finalImages.push({
      projectNumber: num,
      images: images.sort(),
    });
  }
  result.finalImages.sort((a, b) => a.projectNumber - b.projectNumber);

  // Set preview image (prefer final, then apres)
  if (result.finalImages.length > 0) {
    result.previewImage = result.finalImages[0].images[0];
  } else if (result.beforeAfterPairs.length > 0) {
    result.previewImage = result.beforeAfterPairs[0].after[0];
  }

  return result;
}

export function getAllRenovationPreviews(): Map<string, string | null> {
  const renovationPath = path.join(process.cwd(), "public", "assets", "images", "renovation");
  const previews = new Map<string, string | null>();

  if (!fs.existsSync(renovationPath)) {
    return previews;
  }

  const folders = fs.readdirSync(renovationPath, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const folder of folders) {
    const images = getRenovationImages(folder);
    previews.set(folder, images.previewImage);
  }

  return previews;
}
