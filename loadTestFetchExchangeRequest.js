import http from 'k6/http'
import { sleep } from 'k6'
import { Counter, Rate } from 'k6/metrics'
import { randomSeed } from 'k6'


export const options = {
  scenarios: {
    example_scenario: {
      // name of the executor to usei
      executor: 'ramping-arrival-rate',
      // common scenario configuration
      startRate: '50',
      timeUnit: '1s',
      // executor-specific configuration
      preAllocatedVUs: 50,
      maxVUs: 200,
      stages: [
        { target: 200, duration: '30s' },
        { target: 0, duration: '30s' },
      ],
    },
  },
}

export default function () {
   //each user view their requests in transfer pages
   const query = `{operationName":"FetchExchangeRequests","variables":{"id":1},"query":"query FetchExchangeRequests($id: Int) {\n  exchangeRequests(id: $id) {\n    ...ExchangeRequest\n    __typename\n  }\n}\n\nfragment ExchangeRequest on ExchangeRequest {\n  requestId\n  amountWant\n  bidRate\n  amountPay\n  currentRate\n  fromCurrency\n  toCurrency\n  __typename\n}\n"}`;
   const header = { headers: { 'Content-Type': 'application/json' } }
   http.post('http://localhost:3000/graphql', JSON.stringify({ query: query }), header )
  sleep(1)
}

const count200 = new Counter('status_code_2xx')
const count300 = new Counter('status_code_3xx')
const count400 = new Counter('status_code_4xx')
const count500 = new Counter('status_code_5xx')

const rate200 = new Rate('rate_status_code_2xx')
const rate300 = new Rate('rate_status_code_3xx')
const rate400 = new Rate('rate_status_code_4xx')
const rate500 = new Rate('rate_status_code_5xx')

function recordRates(res) {
  if (res.status >= 200 && res.status < 300) {
    count200.add(1)
    rate200.add(1)
  } else if (res.status >= 300 && res.status < 400) {
    console.log(res.body)
    count300.add(1)
    rate300.add(1)
  } else if (res.status >= 400 && res.status < 500) {
    count400.add(1)
    rate400.add(1)
  } else if (res.status >= 500 && res.status < 600) {
    count500.add(1)
    rate500.add(1)
  }
}