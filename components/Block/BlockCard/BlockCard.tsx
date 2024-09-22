import styles from './BlockCard.module.css'
import Image from 'next/image'

import { ind_block_data } from '@/types/Block/blockCard.types'

interface Props {
  leftSideImage: boolean
  data: ind_block_data
  number: number
}

export default function BlockCard({ leftSideImage, data, number }: Props) {
  return (
    <>
      <div className={styles.blockCardWrapper}>
        <div className={styles.blockCardMain}>
          <div
            className={`${styles.blockInfo} ${
              leftSideImage && styles.blockInfoLeft
            }`}
          >
            <div className={styles.blockNumber}>
              <h1>{number < 10 ? `0${number}` : number}</h1>
              <div className={styles.styleDiv}></div>
            </div>
            <div className={styles.blockName}>
              <h1>{data.title}</h1>
              <br />
              <h3>{data.start_month}</h3>
            </div>
            <div className={styles.blockInfo}>{data.description}</div>
            <div className={styles.knowMore}>
              <a href={data.url} target='_blank'>
                <div>Know More</div>
                <div className={styles.buttonImage}>
                  <Image
                    alt='button'
                    src='/Events/event-button.svg'
                    fill
                    priority
                  />
                </div>
              </a>
            </div>
          </div>
          <div
            className={`${styles.blockImageWrapper} ${
              leftSideImage && styles.blockImageWrapperLeft
            }`}
          >
            <div className={styles.blockImageCard}>
              <Image src={data.image_url} fill alt='user provided image' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
