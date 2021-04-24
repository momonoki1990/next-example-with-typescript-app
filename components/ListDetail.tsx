import * as React from 'react'

import { User } from '../interfaces'

type ListDetailProps = {
  item: User
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>{user.name}さん！</h1>
    <p>ID: {user.id}</p>
    {user.age && (<p>age: {user.age}</p>)}
  </div>
)

export default ListDetail
