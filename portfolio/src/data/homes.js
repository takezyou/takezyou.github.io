const introduction = {
  name: 'Kaito Akita',
  jpname: '秋田 海人 (22)',
  text: '3年次編入で，琉球大学工学部情報工学科に入学。学部生の時は，学科のシステム管理チームに所属し運用，管理，保守を行っていました。また，OpenFlow技術を用いたネットワークの研究を行っていました。その後，琉球大学大学院理工学研究科情報工学専攻に入学。株式会社HugkunでバイトをしながらWeb技術について学んでいます。大学院では，引き続きシステム管理チームに所属し，OpenStackに関わる研究を模索中。好きなものは🍎。嫌いなものは🍌。インフラエンジニア目指して奮闘中！！！'
}

const careers = [
  {career: '福岡県立北九州高等学校 卒業', year: 'March 2014'},
  {career: '専門学校九州テクノカレッジ 入学', year: 'April 2014'},
  {career: '専門学校九州テクノカレッジ 卒業', year: 'March 2016'},
  {career: '琉球大学工学部情報工学科 入学', year: 'April 2016'},
  {career: '琉球大学工学部情報工学科 卒業', year: 'March 2018'},
  {career: '株式会社Hugkun　アルバイト', year: 'March 2018 ~'},
  {career: '琉球大学大学院理工学研究科情報工学専攻 入学', year: 'April 2018 ~'}
]

export default {
  introduction () { return introduction },
  careers () { return careers }
}
