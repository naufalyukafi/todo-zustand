import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { IListTodo } from '../ts/interface'

const ListTodo = ({ title, onEdit, onDelete }: IListTodo) => {
    return (
        <Box mt={2}>
            <Flex p={2} justify="space-between" w="full">
                <Text>{title}</Text>
                <Flex gap={3}>
                    <Button colorScheme='orange' onClick={onEdit}>Edit</Button>
                    <Button colorScheme='red' onClick={onDelete}>Delete</Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ListTodo