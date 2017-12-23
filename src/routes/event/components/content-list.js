import React from 'react'
import { Tabs, Badge } from 'antd-mobile';

import logo from '../../../assets/imgs/hs-logo.png'
import ProjectList from './project-list'
import styles from './content-list.less'

const tabs = [
  { title: <p>公司简介</p> },
  { title: <p>国际权威企业</p> },
  { title: <p>项目简介</p> },
  // { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
  // { title: <Badge dot>Third Tab</Badge> },
];

export default function ContentList() {
  return (
    <div className={styles.wrapper}>
      <Tabs
        tabs={tabs}
        initialPage={0}
        // onChange={(tab, index) => { console.log('onChange', index, tab); }}
        // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        swipeable={false}
      >
        <div className={styles.tab}>
          <img src={logo} alt="" />
          瀚晟国际是在2009年 本着“关爱、诚信、卓越”的文化理念<br />
          现已拥有一批高素质的企业营销队伍，管理人员、医学专家、化工工程及优秀的专业技术人员。有着丰富行业国际运作敬仰，强有力的研发及运作实力使得瀚晟国际在内地创作初始就不遗余力的引进国内外高新技术成果及美容项目。<br />
          于2015年经过世界顶级的整形团队的潜心研究的整形技术与系统的市场调研后推出的易操作、更系统、更专业、更有效的整形项目的运营平台.<br />
          该平台综合了中、台、韩、泰的顶级整形理念与技术，具有更易操作的市场运营模式的最先进的整形运营企业。并设有瑞士 日本 泰国等多条抗衰路线，为大家的健康保驾护航。
        </div>
        <div className={styles.tab}>
          <img src={logo} alt="" />
          <p>拥有亚太区甲级合资入股医院：
            韩国 MVP医院2.）德莱茵医疗医院3）泰国BH皇室医院
            二大全资直营体系：
            ①基恩整形医院
            ②圣韩美医院<br />

            <b>301医院</b>
            中国人民解放军总医院（301医院）创建于1953年，是集医疗、保健、教学、科研于一体的大型现代化综合性医院
            陆海空三军总院、中国最权威、综合排名第一的三甲医院；
            医院分为普通门诊、国宾部、国际部；
            老百姓心中最神秘的首长医院<br />

            <b>307医院</b>
            中国人民解放军第三〇七医院（中国人民解放军军事医学科学院附属医院）是一所集医疗、科研、教学于一体的三级甲等医院，院创建于1957年，前身是国家卫生部同位素医院。1958年医院移交军队，隶属中国人民解放军军事医学科学院
          </p>
        </div>
        <ProjectList />
      </Tabs>
    </div>
  )
}
