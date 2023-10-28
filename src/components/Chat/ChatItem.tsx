import { Container, Stack, Box, Text, Avatar } from '@chakra-ui/react'

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
interface ChatItemProps {
  message: ChatMessage
}
export default function ChatItem({ message }: ChatItemProps) {
  const { sender, message: messageText } = message

  return (
    <Stack
     
      width="100%"
      display={'flex'}
   
      >
      {sender.self ? (
          <Container
          borderRadius="12px 12px 0"
          backgroundColor="#1C63D5"
          maxWidth={'300px'}
          me="10px"
          p="3"
        >
          <Text color="#F1F4Fc" fontSize="14px" fontWeight="400" backgroundColor="#1C63D5">
            {messageText}
          </Text>
         
        </Container>
      ) : (
        <Box backgroundColor="white" maxWidth={'319px'}>
          <Stack display={'flex'} flexDirection={'row'} gap={2}>
          <Avatar size="xs" src={sender.image} />
          <Container
            boxShadow="  rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
            backgroundColor="#fffefe"
            borderRadius="0px 12px 12px 12px"
          >
            <Text
                backgroundColor={'#ffff'}
              fontSize="14px"
              lineHeight="17.57px"
              color="#747474"
              my="10px"
              fontWeight="500"
            className="word-spacing"
            >
              {messageText}
            </Text>
          </Container>
          </Stack>
        </Box>
      )}
    </Stack>
  )
}
