import { useState } from 'react';
import { Asset } from '../asset';
import { Paragraph } from '../paragraph';
import { placeholder, imagesContainer, imageFrame, deleteButton, imageFrameBlock } from './imageInputsStyle.css';

export interface ImageInputsProps {
  onChange?: (files: string[]) => void;
  maxImages: number;
  initialImages?: string[];
  labels?: string[];
}

export function ImageInputs({ onChange, maxImages, initialImages, labels }: ImageInputsProps) {
  const [files, setFiles] = useState<string[]>(initialImages ?? []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.currentTarget.files;
    const availableLength = maxImages - files.length;
    if (newFiles == null) {
      return;
    }
    if (newFiles.length > availableLength) {
      alert(`최대 ${maxImages}개의 사진만 업로드할 수 있습니다.`);
    }
    const newFilesArray = Array.from(newFiles);
    const deleteCount = newFiles.length - availableLength;
    newFilesArray.splice(-deleteCount, deleteCount);

    const previews: string[] = [...files];
    newFilesArray.forEach(file => {
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          previews.push(reader.result as string);
          if (previews.length === newFilesArray.length) {
            setFiles(previews);
          }
        };
        reader.readAsDataURL(file);
      }
    });
    onChange?.(previews);
  };

  return (
    <div className={imagesContainer}>
      {new Array(maxImages).fill(null).map((_, index) => (
        <div className={imageFrameBlock} key={index}>
          {files != null && files.length > index ? (
            <>
              <div className={imageFrame}>
                <img src={files[index]} style={{ width: '104px', height: '104px', objectFit: 'cover' }} />
                <button className={deleteButton} onClick={() => setFiles(files.filter((_, i) => i !== index))}>
                  <Asset type="icon-close" />
                </button>
              </div>
            </>
          ) : (
            <label className={placeholder}>
              <input
                type="file"
                accept="image/jpeg, image/png, image/webp, image/jpg, image/heic"
                multiple
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <Asset type="icon-plus" />
            </label>
          )}
          <Paragraph typography="ca" color="neutral600" style={{ textAlign: 'center' }}>
            {labels != null && labels.length > index && labels[index]}
          </Paragraph>
        </div>
      ))}
    </div>
  );
}
