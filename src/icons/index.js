import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon',SvgIcon)

const req = require.context('./svg',false, /\.svg$/)
console.log("req",req)
const requireAll = requireContext => {
  console.log("requireContext",requireContext.keys());
  return requireContext.keys().map(requireContext)
}
requireAll(req)