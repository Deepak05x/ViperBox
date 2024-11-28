import { Area } from "react-easy-crop";

export const getCroppedImg = async (imageSrc: string, cropArea: Area, backgroundColor: string = "white") => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        throw new Error("Failed to get 2D context");
    }

    // Set canvas dimensions
    canvas.width = cropArea.width;
    canvas.height = cropArea.height;

    // Fill the background with the selected color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the cropped image
    ctx.drawImage(image, cropArea.x, cropArea.y, cropArea.width, cropArea.height, 0, 0, cropArea.width, cropArea.height);

    // Return the cropped image as a blob URL
    return new Promise<string>((resolve, reject) => {
        canvas.toBlob(
            (blob) => {
                if (!blob) {
                    reject(new Error("Canvas is empty"));
                    return;
                }
                const url = URL.createObjectURL(blob);
                resolve(url);
            },
            "image/png",
            1
        );
    });
};

const createImage = (url: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", () => resolve(image));
        image.addEventListener("error", (error) => reject(error));
        image.setAttribute("crossOrigin", "anonymous"); // Needed for cross-origin requests
        image.src = url;
    });
};
