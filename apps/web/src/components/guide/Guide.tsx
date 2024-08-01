import { Button, Paragraph } from '@bottlesteam/ui';
import { motion, useInView, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { guideTextStyle, sectionStyle, strongTextStyle } from './guideStyle.css';

export function Guide() {
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      className={sectionStyle}
      ref={ref}
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <Paragraph color="black100" className={guideTextStyle}>
        지금 바로{' '}
        <Paragraph color="purple500" className={strongTextStyle} asChild>
          <strong>Bottle</strong>
        </Paragraph>
        로 접속해 <br /> 마음의 상태를 점검 받아보세요!
      </Paragraph>
      <br />
      <Button
        onClick={e => {
          // eslint-disable-next-line no-undef
          (window as any).webkit.messageHandlers.Native.onClickCancelButton();
          // Native.onClickCancelButton();
          e.preventDefault();
          // alert('앗! 아직 서비스가 준비중이에요. 잠시만 기다려주세요.');
        }}
        variant="solid"
        size="sm"
        asChild
      >
        <Link href="/">이용하러 가기</Link>
      </Button>
    </motion.div>
  );
}
