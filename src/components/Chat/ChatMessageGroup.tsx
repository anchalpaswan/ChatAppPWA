import { Box, Text, VStack, Stack } from '@chakra-ui/react'
import ChatItem from './ChatItem'

interface Sender {
  image: string
  is_kyc_verified: boolean
  self: boolean
  user_id: string
}

interface ChatMessage {
  id: string
  message: string
  sender: Sender
  time: string
}

interface ChatMessageGroupProps {
  date: string
  messages: ChatMessage[]
}
function formatChatDate(date: string) {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}


function ChatMessageGroup({ date, messages }: ChatMessageGroupProps) {
  const formattedDate = formatChatDate(date)
  return (
    <Box>
      <Stack display="flex" flexDirection="row" justifyContent={'space-between'} alignItems="center">
        <Box w="40%" h="2px"  backgroundColor={'rgba(183,183,183,0.4)'} m={2}></Box>
        <Text fontSize="14px"  textAlign={'center'} color="
 rgba(183,183,183,0.8)" lineHeight={'17.57px'} >
          {`${formattedDate.split(" ")[1].replace(',','')} ${formattedDate.split(" ")[0].toUpperCase()}, ${formattedDate.split(" ")[2]}`}
        </Text>
        <Box w="40%" h="2px" backgroundColor={'rgba(183,183,183,0.4)'} m={2}></Box>
      </Stack>
      <VStack spacing={3} >
        {messages.map((message) => {
          const updatedMessage = message.message.replace(/<br>Page 1<br>/g, '')

          const updatedChatMessage = { ...message, message: updatedMessage }

          return <ChatItem key={message.id} message={updatedChatMessage} />
        })}
      </VStack>
    </Box>
  )
}
export default ChatMessageGroup
