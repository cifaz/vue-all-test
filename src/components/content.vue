<template>
  <div>
    <Header></Header>
    <div>我是内容</div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

document.title = '内容页'

export default {
  name: 'contenter',
  components: {
    Header,
    Footer
  }
}
</script>
