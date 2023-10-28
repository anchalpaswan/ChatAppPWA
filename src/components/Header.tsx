import {
  Box,
  Stack,
  Text,
  Container,
  Wrap,
  Avatar,
  WrapItem,
} from '@chakra-ui/react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Profile from '../assets/Profile.svg'


interface HeaderProps {
    groupName: string; 
    from: string; 
    to: string; 
  }

function Header({ groupName, from, to }: HeaderProps) {
  return (
    <Box>
      <Stack
        alignItems={'center'}
        direction="row"
        justifyContent={'space-between'}
      >
        <Box display="flex" alignItems={'center'} gap="10px">
          <AiOutlineArrowLeft fontSize="24px" />
          <Text fontSize={24} fontWeight="bold">
            {groupName}
          </Text>
        </Box>
        <HiOutlinePencilAlt fontSize="24px" />
      </Stack>
      <Stack
        alignItems={'center'}
        direction="row"
        justifyContent={'space-between'}
      >
        <Container
          mt="16px"
          pb="16px"
          display="flex"
          justifyContent="space-between"
          borderBottom="1px solid #E5E5E0"
        >
          <Wrap>
            <Avatar src={Profile} />
            <WrapItem display="flex" flexDirection="column" ml="12px">
              <Text fontSize="18px">
                From <strong>{from}</strong>
              </Text>
              <Text fontSize="18px">
                To <strong>{to}</strong>
              </Text>
            </WrapItem>
          </Wrap>
          <BsThreeDotsVertical fontSize="24px" />
        </Container>
      </Stack>
    </Box>
  )
}

export default Header
