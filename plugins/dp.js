export default ({ app }) => {
  (function() {
    var sc = document.createElement('script')
    sc.type = 'text/javascript'
    sc.async = true
    sc.src = '//setetres.s3.amazonaws.com/setetres.st/js/dp.js'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(sc, s)
  })()
}
