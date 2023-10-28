import { Container, Stack, Spinner } from '@chakra-ui/react'
import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import ChatMessageGroup from './ChatMessageGroup'
import Header from '../Header'
import Footer from '../Footer'
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

const Chat = () => {
  const [chatData, setChatData] = useState<ChatMessage[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [groupInfo, setGroupInfo] = useState({
    name: 'Trip No.',
    from: '',
    to: '',
  })

  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const chatContainerRef = useRef<HTMLDivElement | null>(null)

  const fetchMoreChatMessages = async (
    page: number,
  ): Promise<ChatMessage[] | void> => {
    setIsLoading(true)

    try {
      const response = await fetch(
        `https://qa.corider.in/assignment/chat?page=${page}`,
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.log(data)
      const chatMessages = data.chats
      setGroupInfo({ name: data.name, from: data.from, to: data.to })

      // Sort the chat data by timestamps (from newest to oldest)
      chatMessages.sort(
        (
          a: { time: string | number | Date },
          b: { time: string | number | Date },
        ) => new Date(a.time).getTime() - new Date(b.time).getTime(),
      )

      // Update chatData with new messages
      setChatData((prevData) => [...chatMessages, ...prevData])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }



  const loadMoreChatMessages = async (page: number) => {
    const newMessages = await fetchMoreChatMessages(page)

    if (newMessages && newMessages.length > 0) {
      setChatData((prevData) => [...prevData, ...newMessages])
      setCurrentPage(page)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  })

  useLayoutEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      container.scrollTop = container.scrollHeight // Scroll to the bottom initially

      const handleScroll = () => {
        if (container.scrollTop === 0 && !isLoading) {
          loadMoreChatMessages(currentPage + 1) // Load more messages
        }
      }

      container.addEventListener('scroll', handleScroll)

      // Attach the intersection observer as before
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.01,
      }
      const handleIntersect: IntersectionObserverCallback = (
        entries,
        observer,
      ) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMoreChatMessages(currentPage + 1)
            observer.disconnect()
          }
        })
      }

      const observer = new IntersectionObserver(handleIntersect, options)

      if (chatContainerRef.current) {
        observer.observe(chatContainerRef.current)
      }
    }
  }, [currentPage])

  function groupMessagesByDate(messages: ChatMessage[] | undefined) {
    const groupedMessages: { [date: string]: ChatMessage[] } = {}

    messages?.forEach((message) => {
      const messageDate = new Date(message.time).toLocaleDateString()

      if (!groupedMessages[messageDate]) {
        groupedMessages[messageDate] = []
      }

      groupedMessages[messageDate].push(message)
    })

    return groupedMessages
  }
  const groupedMessages = groupMessagesByDate(chatData)
  return (
    <Container>
      <Stack height={'100vh'} maxHeight={'100vh'}>
        {/* Chat Header */}
        <Header
          groupName={groupInfo.name}
          from={groupInfo.from}
          to={groupInfo.to}
        />

        {/* msg */}

        <Stack sx={{ flexGrow: 1 }} overflowY="auto" ref={scrollContainerRef}>
          {isLoading ? (
            <Container w={100} p={12}>
              <Spinner />
            </Container>
          ) : (
            <Stack ref={chatContainerRef} height="100%">
              {Object.keys(groupedMessages).map((date) => (
                <ChatMessageGroup
                  key={date}
                  date={date}
                  messages={groupedMessages[date]}
                />
              ))}
            </Stack>
          )}
        </Stack>

        {/* Footer */}
        <Footer />
      </Stack>
    </Container>
  )
}
export default Chat
