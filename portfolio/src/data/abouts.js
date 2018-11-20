const detail = {
  text: '自己紹介を書く'
}

const skillsets = [
  { name: 'Html5', some: '', other: '' },
  { name: 'CSS3', some: '', other: '' },
  { name: 'Javascript', some: 'Vue', other: 'Node' },
  { name: 'Python2', some: 'Python3', other: '' },
  { name: 'CircleCI 2.0', some: '', other: '' },
  { name: 'AWS', some: '', other: '' }
]

const socials = [
  { name: 'Twitter', link: '', icon: 'twitter' },
  { name: 'Facebook', link: '', icon: 'facebook' },
  { name: 'GitHub', link: '', icon: 'github' }
]

export default {
  detail () { return detail },
  skillsets () { return skillsets },
  socials () { return socials }
}
