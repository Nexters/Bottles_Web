import { Control } from '@/components/control';
import { Asset, BottomSheet, BottomSheetProps, Button, Paragraph, TextField, spacings } from '@bottlesteam/ui';
import { useEffect, useState } from 'react';
import { deleteButtonStyle, emoticonsContainer } from './bottomSheetStyle.css';

interface Props extends Omit<BottomSheetProps, 'button' | 'body'> {
  onExpress: (likeMessage: string) => void;
}

const emoticons = ['🥰', '🥳', '😉', '😎'] as const;

const MAX_MESSAGE_LENGTH = 20;
const ERROR_CAPTION = '20자 이내로 작성해 주세요.';

export function ExpressInterestBottomSheet({ onExpress, ...bottomSheetProps }: Props) {
  const [emoticon, setEmoticon] = useState<(typeof emoticons)[number]>();
  const [message, setMessage] = useState('');
  const likeMessage = `${message} ${emoticon}`;
  const isError = message.length > MAX_MESSAGE_LENGTH;

  useEffect(() => {
    if (bottomSheetProps.isOpen) {
      window.document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }, [bottomSheetProps.isOpen]);

  return (
    <BottomSheet
      {...bottomSheetProps}
      size="sm"
      body={
        <>
          <TextField
            placeholder="호감이 생긴 이유를 적어보세요"
            value={message}
            onChange={e => setMessage(e.currentTarget.value)}
            error={isError}
            rightButton={
              <button
                className={deleteButtonStyle}
                onClick={() => {
                  setMessage('');
                }}
              >
                <Asset type="icon-delete" />
              </button>
            }
          />
          <TextField.Caption>{isError && ERROR_CAPTION}</TextField.Caption>
          <Paragraph typography="st2" color="neutral600" style={{ marginTop: spacings.xl }}>
            이모티콘으로 표현해보세요
          </Paragraph>
          <div className={emoticonsContainer}>
            <Control value={emoticon}>
              {emoticons.map((emoticon, index) => (
                <Control.Item value={emoticon} onClick={() => setEmoticon(emoticon)} key={index}>
                  <Button variant="outlined" size="sm" style={{ width: '62px', height: '62px', fontSize: '40px' }}>
                    {emoticon}
                  </Button>
                </Control.Item>
              ))}
            </Control>
          </div>
        </>
      }
      button={
        <BottomSheet.Button
          onClick={() => onExpress(likeMessage)}
          disabled={isError || message.length === 0 || emoticon === undefined}
        >
          완료
        </BottomSheet.Button>
      }
    />
  );
}
