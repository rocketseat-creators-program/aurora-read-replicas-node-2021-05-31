const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')

const db = require('../db')
const config = require('../config')
const { getPatientInfo, createPatient } = require('./patient')

const app = new Koa()
const router = new Router()

app.use(koaBody())

db.connect()

router.get('/', async (ctx, next) => {
  ctx.body = 'Running'
})

router.get('/patient/:id', async (ctx, next) => {
  const patientId = ctx.params.id
  ctx.body = await getPatientInfo(patientId)
})

router.post('/patient', async (ctx, next) => {
  console.log(ctx.request)
  const { name, document } = ctx.request.body
  ctx.body = await createPatient(name, document)
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.api.port)
