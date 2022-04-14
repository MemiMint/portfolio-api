import { Request } from "express";
import { extname } from "path";
import multer, {
  StorageEngine,
  DiskStorageOptions,
  Multer,
  FileFilterCallback,
  diskStorage,
} from "multer";

const storageOpts: DiskStorageOptions = {
  destination: "public/uploads",
  filename: (
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void
  ): void => {
    callback(
      null,
      file.fieldname + "_" + Date.now() + "_" + extname(file.originalname)
    );
  },
};

const storage: StorageEngine = diskStorage(storageOpts);

const checkFileType = (
  file: Express.Multer.File,
  callback: FileFilterCallback
) => {
  const filetypes = /jpeg|jpg|png|/;
  const extName = filetypes.test(extname(file.originalname).toLowerCase());
  const mimeType = filetypes.test(file.mimetype);

  if (mimeType && extName) {
    return callback(null, true);
  } else {
    callback(
      Error(`File upload only supports the following filetypes - ${filetypes}`)
    );
  }
};

export const upload = multer({
  storage,
  dest: "public/uploads",
  limits: { fileSize: 1000000 },
  fileFilter: async (req: Request, file: Express.Multer.File, callback) => {
    checkFileType(file, callback);
  },
});
