import type { PutItemCommandInput } from '@aws-sdk/client-dynamodb'
import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { describe, expect, it } from 'vitest'

const dynamodb = new DynamoDB({ region: 'us-east-1' })

describe('DynamoDB test', () => {
  it('it should set dynamodb cache', async () => {
    await set('foo', 'bar')
    const value = await get('foo')
    expect(value).toBe('bar')
  })

  it('it should get dynamodb cache', async () => {
    await set('foo', 'bar')
    const value = await get('foo')
    expect(value).toBe('bar')
  })

  it('it should delete dynamodb cache', async () => {
    await set('foo', 'bar')
    await remove('foo')
    const value = await get('foo')
    expect(value).toBe(null)
  })
})

// TODO: needs to be imported to cache package
async function set(key: string, value: string | number): Promise<void> {
  const valueAttribute = 'value'
  const keyAttribute = 'key'

  const params: PutItemCommandInput = {
    TableName: 'cache',
    Item: {
      [keyAttribute]: {
        S: key,
      },
      [valueAttribute]: {
        [getValueType(value)]: serialize(value),
      },
    },
  }

  await dynamodb.putItem(params)
}

// TODO: needs to be imported to cache package
async function get(key: string): Promise<string | undefined | null> {
  const valueAttribute = 'value'
  const keyAttribute = 'key'

  const params = {
    TableName: 'cache',
    Key: {
      [keyAttribute]: {
        S: key,
      },
    },
  }

  const response = await dynamodb.getItem(params)

  if (!response.Item)
    return null

  return response.Item[valueAttribute].S ?? response.Item[valueAttribute].N
}

// TODO: needs to be imported to cache package
function getValueType(value: string | number) {
  if (typeof value === 'string')
    return 'S'

  if (typeof value === 'number')
    return 'N'

  return 'S'
}

// TODO: needs to be imported to cache package
async function remove(key: string): Promise<void> {
  const keyAttribute = 'key'

  const params = {
    TableName: 'cache',
    Key: {
      [keyAttribute]: {
        S: key,
      },
    },
  }

  await dynamodb.deleteItem(params)
}

// TODO: needs to be imported to cache package
// async function del(key: string): Promise<void> {
//   const params = {
//     TableName: 'cache',
//     Key: {
//       [keyAttribute]: {
//         S: key,
//       },
//     },
//   }

//   await dynamodb.deleteItem(params)
// }

// TODO: needs to be imported to cache package
function serialize(value: string | number) {
  return String(value)
}
