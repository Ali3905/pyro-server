import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp"); // Temporarily store files in this folder
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Save with the original file name
    }
});

export const upload = multer({
    storage,
}).fields([
    { name: 'followersRatioImage', maxCount: 1 },
    { name: 'topCitiesImage', maxCount: 1 },
    { name: 'ageRangeImage', maxCount: 1 }
]);
