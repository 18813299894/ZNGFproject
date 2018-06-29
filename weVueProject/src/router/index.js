import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '@/components/loginPage'
import homePage from '@/components/homePage'
import attentionPage from '@/components/attentionPage'
import recoveryPage from '@/components/recoveryPage'
import futurePricePage from '@/components/futurePricePage'
import latestPricePage from '@/components/latestPricePage'
import deliveryPage from '@/components/deliveryPage'
import classificationPage from '@/components/classificationPage'
import deliveryProcessPage from '@/components/deliveryProcessPage'
import complaintPage from '@/components/complaintPage'
import contactPage from '@/components/contactPage'
import queryOrderPage from '@/components/queryOrderPage'
import queryResultPage from '@/components/queryResultPage'
import getOrderNum from '@/components/getOrderNum'
import overWeightPage from '@/components/overWeightPage'
import overWeightDetails from '@/components/overWeightDetails'
import futurePricePush from '@/components/futurePricePush'
import reconciliationPush from '@/components/reconciliationPush'
import personalPage from '@/components/personalPage'
import modifyPassword from '@/components/modifyPassword'
import test from '@/components/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/loginPage',
      name:'loginPage',
      component:loginPage 
    },
    {
      path:'/homePage',
      name:'homePage',
      component:homePage
    },
    {
      path:'/attentionPage',
      name:'attentionPage',
      component:attentionPage
    },
    {
      path:'/recoveryPage',
      name:'recoveryPage',
      component:recoveryPage
    },
    {
      path:'/test',
      name:'test',
      component:test
    },
    {
      path:'/futurePricePage',
      name:'futurePricePage',
      component:futurePricePage
    },
    {
      path:'/latestPricePage',
      name:'latestPricePage',
      component:latestPricePage
    },
    {
      path:'/deliveryPage',
      name:'deliveryPage',
      component:deliveryPage
    },
    {
      path:'/classificationPage',
      name:'classificationPage',
      component:classificationPage
    },
    {
      path:'/deliveryProcessPage',
      name:'deliveryProcessPage',
      component:deliveryProcessPage
    },
    {
      path:'/complaintPage',
      name:'complaintPage',
      component:complaintPage
    },
    {
      path:'/contactPage',
      name:'contactPage',
      component:contactPage
    },
    {
      path:'/queryOrderPage',
      name:'queryOrderPage',
      component:queryOrderPage
    },
    {
      path:'/queryResultPage',
      name:'queryResultPage',
      component:queryResultPage
    },
    {
      path:'/getOrderNum',
      name:'getOrderNum',
      component:getOrderNum
    },
    {
      path:'/overWeightPage',
      name:'overWeightPage',
      component:overWeightPage
    },
    {
      path:'/overWeightDetails',
      name:'overWeightDetails',
      component:overWeightDetails
    },
    {
      path:'/futurePricePush',
      name:'futurePricePush',
      component:futurePricePush
    },
    {
      path:'/reconciliationPush',
      name:'reconciliationPush',
      component:reconciliationPush
    },
    {
      path:'/personalPage',
      name:'personalPage',
      component:personalPage
    },
    {
      path:'/modifyPassword',
      name:'modifyPassword',
      component:modifyPassword
    }
  ]
})
