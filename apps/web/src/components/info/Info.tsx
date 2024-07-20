import { motion } from 'framer-motion';
import { boxStyle } from '../../app/layout.css';
import { Text } from '../text/Text';
import { container } from './infoStyle.css';

export function Info() {
  return (
    <div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <h2 style={{ marginTop: '120px', fontSize: '24px', fontWeight: 700 }}>이런 고민하시나요?</h2>
        <div className={container}>
          <ul>
            <li>
              <div className={boxStyle({ margin: 'large' })}>
                <Text color="black" typography="t2">
                  1. 결혼하고 싶어요
                </Text>
              </div>
            </li>
            <li>
              <div className={boxStyle({ margin: 'large' })}>
                <Text color="black" typography="t2">
                  2. 영혼의 단짝을 만나고 싶어요
                </Text>
              </div>
            </li>
            <li>
              <div className={boxStyle({ margin: 'none' })}>
                <Text color="black" typography="t2">
                  3. 타 인연 주선 서비스들은 너무 가벼워요 😢
                </Text>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
