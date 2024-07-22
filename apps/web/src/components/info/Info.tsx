import { Paragraph } from '@bottlesteam/ui';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { boxStyle } from '../../app/layout.css';
import { container } from './infoStyle.css';

export function Info() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    }
  }, [isVisible, controls]);

  return (
    <div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <h2 style={{ marginTop: '120px', fontSize: '24px', fontWeight: 700 }}>
          이런{' '}
          <Paragraph color="purple400" asChild style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
            <strong>고민</strong>
          </Paragraph>
          하시나요?
        </h2>
        <div className={container}>
          <ul>
            <li>
              <div className={boxStyle({ margin: 'large' })}>
                <Paragraph color="black100" typography="st1">
                  ❤️ 연애가 어려워요.
                </Paragraph>
              </div>
            </li>
            <li>
              <div className={boxStyle({ margin: 'large' })}>
                <Paragraph color="black100" typography="st1">
                  ❤️ 편하게 고민을 얘기할 상대가 필요해요.
                </Paragraph>
              </div>
            </li>
            <li>
              <div className={boxStyle({ margin: 'none' })}>
                <Paragraph color="black100" typography="st1">
                  ❤️ 관련 전문 지식을 보유한 사람과 {'\n    '} 상담을 받아보고 싶어요.
                </Paragraph>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Paragraph color="purple400" style={{ fontSize: '20px', fontWeight: 600, marginTop: '60px' }}>
          <Paragraph color="purple500" style={{ fontSize: '30px', fontWeight: 700 }} asChild>
            <strong>Bottle</strong>
          </Paragraph>
          에서는, {'\n'}실력있는 상담사들과 다양한 방식으로 언제든 소통하고 상담할 수 있습니다.
        </Paragraph>
      </motion.div>
    </div>
  );
}
