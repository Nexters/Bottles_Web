import { ComponentProps } from 'react';
import { Asset } from '../asset';
import { Paragraph } from '../paragraph';
import { placeholder, imagesContainer, imageFrame, deleteButton, imageFrameBlock } from './imageInputsStyle.css';

export interface ImageInputsProps extends Omit<ComponentProps<'div'>, 'onChange' | 'className'> {
  onChange: (files: (File | string)[]) => void;
  maxImages: number;
  labels?: string[];
  // images: string[];
  images: (File | string)[];
  onMaxExceeded?: () => void;
}

export function ImageInputs({
  onChange,
  images,
  maxImages,
  labels,
  onMaxExceeded,
  ...containerProps
}: ImageInputsProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.currentTarget.files;
    const availableLength = maxImages - images.length;
    if (newFiles == null) {
      return;
    }
    if (newFiles.length > availableLength) {
      onMaxExceeded?.();
    }
    const newFilesArray = Array.from(newFiles);
    const deleteCount = newFiles.length - availableLength;
    newFilesArray.splice(-deleteCount, deleteCount);

    onChange([...images, ...newFilesArray]);
  };

  const handleDelete = (index: number) => {
    const filtered = images.filter((_, i) => i !== index);
    onChange(filtered);
  };

  return (
    <div className={imagesContainer} {...containerProps}>
      {new Array(maxImages).fill(null).map((_, index) => (
        <div className={imageFrameBlock} key={index}>
          {images.length > index ? (
            <>
              <div className={imageFrame}>
                <img
                  src={typeof images[index] === 'string' ? images[index] : URL.createObjectURL(images[index]!)}
                  style={{ width: '104px', height: '104px', objectFit: 'cover' }}
                />
                <button className={deleteButton} onClick={() => handleDelete(index)}>
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
