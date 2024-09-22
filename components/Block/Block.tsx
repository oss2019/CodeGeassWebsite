import styles from './Block.module.css'
import BlockCard from './BlockCard/BlockCard'

import blocksData from '@/types/Block/blockCard.types'

interface Props {
  title: string
  blocksData: blocksData
}

export default function Block({ title, blocksData }: Props) {
  return (
    <>
      <div id='blocksId' className={styles.blocksWrapper}>
        <div className={`${styles.blocksMain} page-wrapper`}>
          <div className={styles.blocksHeading}>
            <div className={styles.text_block}>
              <h2>{title}</h2>
            </div>
          </div>
          <div className={styles.blocksCardWrapper}>
            {blocksData.map((data, index) => {
              return (
                <BlockCard
                  data={data}
                  key={index}
                  number={index + 1}
                  leftSideImage={index % 2 ? false : true}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
