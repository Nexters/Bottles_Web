import { Stepper } from '@/components/common/stepper';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';
import { Agreement as AgreementComponent, spacings } from '@bottlesteam/ui';
import { useState } from 'react';

export function Agreement() {
  const { onNextStep } = useStep();
  const { send } = useAppBridge();

  const [privacyPolicyAgreed, setPrivacyPolicyAgreed] = useState(false);
  const [termsOfServiceAgreed, setTermsOfServiceAgreed] = useState(false);

  return (
    <Step>
      <Stepper current={1} max={3} />
      <Step.Title>{'보틀을 이용하기 위해서는\n약관 동의가 필요해요'}</Step.Title>
      <AgreementComponent
        style={{ marginTop: spacings.xxl }}
        agreeAll={
          <AgreementComponent.AgreeAllItem
            onChange={e => {
              setPrivacyPolicyAgreed(e.currentTarget.checked);
              setTermsOfServiceAgreed(e.currentTarget.checked);
            }}
            checked={privacyPolicyAgreed && termsOfServiceAgreed}
          >
            전체 동의하기
          </AgreementComponent.AgreeAllItem>
        }
        items={
          <>
            <AgreementComponent.Item
              onChange={e => {
                setPrivacyPolicyAgreed(e.currentTarget.checked);
              }}
              checked={privacyPolicyAgreed}
            >
              [필수]
              <u
                style={{ marginLeft: spacings.xs }}
                onClickCapture={e => {
                  e.preventDefault();
                  send({
                    type: AppBridgeMessageType.OPEN_LINK,
                    payload: {
                      url: 'https://spiral-ogre-a4d.notion.site/abb2fd284516408e8c2fc267d07c6421',
                    },
                  });
                }}
              >
                개인정보처리방침
              </u>
            </AgreementComponent.Item>
            <AgreementComponent.Item
              onChange={e => {
                setTermsOfServiceAgreed(e.currentTarget.checked);
              }}
              checked={termsOfServiceAgreed}
            >
              [필수]
              <u
                style={{ marginLeft: spacings.xs }}
                onClickCapture={e => {
                  e.preventDefault();
                  send({
                    type: AppBridgeMessageType.OPEN_LINK,
                    payload: {
                      url: 'https://spiral-ogre-a4d.notion.site/240724-e3676639ea864147bb293cfcda40d99f',
                    },
                  });
                }}
              >
                보틀이용약관
              </u>
            </AgreementComponent.Item>
          </>
        }
      />
      <Step.FixedButton disabled={!privacyPolicyAgreed || !termsOfServiceAgreed} onClick={onNextStep}>
        다음
      </Step.FixedButton>
    </Step>
  );
}
