import reactNativeImage from '@/assets/reactnative.png'
import designSoftwareImage from '@/assets/designsoftware.png'
import sistemasdistribuidos from '@/assets/sistemasdistribuidos.png'
import webmobile from '@/assets/webmobile.png'
import api from '@/assets/api.png'
import flutter from '@/assets/flutter.png'

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
    },
    {
      title: 'Ubiquitous Computing, Clouds, IoT e Smart Environments',
      url: 'sistemasdistribuidos',
      description: 'Introdução Ubiquitous Computing, Clouds, IoT e Smart Environments',
      image: sistemasdistribuidos,
    },
    {
      title: 'Programação Web Mobile',
      url: 'webmobile',
      description: 'design, programação, web',
      image: webmobile,
    },
    {
      title: "API's",
      url: 'api',
      description: 'api, design, programação, web',
      image: api,
    },
    {
      title: "Flutter",
      url: 'flutter',
      description: 'mobile, flutter, programação',
      image: flutter,
    }
  ]
}
