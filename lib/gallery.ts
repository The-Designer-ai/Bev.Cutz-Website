import { readdirSync } from "fs";
import path from "path";

export type TransformationVideo = {
  src: string;
  label: string;
  caption: string;
};

const galleryDir = path.join(process.cwd(), "public", "gallery");

const videoText: Record<string, Pick<TransformationVideo, "label" | "caption">> = {
  "/gallery/d9985946763745109e7dc5069ae53a57.mp4": {
    label: "Before & After",
    caption: "Full transformation"
  },
  "/gallery/117e8f35f6a54d658a409640f3542bf3.mp4": {
    label: "Fresh Taper",
    caption: "Taper detail"
  },
};

function defaultVideoText(): Pick<TransformationVideo, "label" | "caption"> {
  return {
    label: "Transformation",
    caption: "Fresh finish"
  };
}

export function getTransformationVideos(): TransformationVideo[] {
  const files = readdirSync(galleryDir, { withFileTypes: true })
    .filter((file) => file.isFile() && /\.(mp4|webm)$/i.test(file.name))
    .map((file) => file.name)
    .sort();

  return files.map((fileName) => {
    const src = `/gallery/${fileName}`;

    return {
      src,
      ...(videoText[src] ?? defaultVideoText())
    };
  });
}
