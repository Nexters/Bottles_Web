import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { buttonStyle, guideTextStyle, sectionStyle, strongTextStyle } from './guideStyle.css';

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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h2 className={guideTextStyle}>
        그렇다면 바로 <strong className={strongTextStyle}>Bottle</strong> 로 접속해 <br /> 사랑의 보틀을 받아보세요!
      </h2>
      <br />
      <br />
      <button onClick={() => alert('앗! 아직 앱이 준비중이에요. 잠시만 기다려주세요.')} className={buttonStyle}>
        이용하러 가기
      </button>
    </motion.div>
  );
}
