
import { Heading,Image,Text } from '@chakra-ui/react'
import logo from '/Users/vrajborad/ai-keyword-extractor/src/assets/light-bulb.svg'

const Header = () => {
  return (
    <>
        <Image src={logo} alt='logo' width={100} marginBottom='1rem'/>
        <Heading color='white' marginBottom='1rem'>
            AI Keyword Extractor
        </Heading>
        <Text fontSize={25} textAlign='center'>
            Paste in your text below and we will extrat the keywords for you
        </Text>
    </>
  )
}

export default Header