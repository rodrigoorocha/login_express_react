import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Avatar, Card, Group, Image, Stack, Text } from '@mantine/core'

function HomePage() {

  const { user, setUser } = useContext(UserContext)
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>


      <Stack  align='center' mt="md" mb="xs">
        <Image width={200}
          src={user.avatar}

        />
        <Text weight={500}>{user.name}</Text>
      </Stack>

      <Text maw={500} color="dimmed">
        {user.desc}
      </Text>
    </Card>
  )
}

export default HomePage