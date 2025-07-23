import reactNativeImage from '@/assets/reactnative.png'
import designSoftwareImage from '@/assets/designsoftware.png'

export function getSlides() {
  return [
    {
      title: 'Design de Software',
      url: 'designsoftware',
      description: 'Introdução a Design de Software',
      image: designSoftwareImage,
    },
    {
      title: 'React Native',
      url: 'reactnative',
      description: 'Introdução ao React Native',
      image: reactNativeImage,
    }
  ]
}
