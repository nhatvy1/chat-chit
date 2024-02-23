import { UserAddOutlined } from "@ant-design/icons"
import { Avatar, Button, Form, Input, Tooltip } from "antd"
import Message from "./Message"
import styled from "styled-components"

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`

const WrapperStyled = styled.div`
  height: 100vh;
`

const ContentStyled = styled.div`
  height: calc(100% - 57px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 5px;

  padding: 2px 2px 2px 0;
  .ant-form {
    padding: 0;
  }

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
  padding: 11px;
`

const ChatWindow = () => {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className='header__info'>
          <p className='header__title'>Room 1</p>
          <span className='header_description'>Day la room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button
            icon={<UserAddOutlined />}
            type='text'>
            Mời
          </Button>
          <Avatar.Group
            size='small'
            maxCount={2}>
            <Tooltip title='A'>
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title='B'>
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title='C'>
              <Avatar>C</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>

      <ContentStyled>
        <MessageListStyled>
          <Message
            text='Xin chao'
            photoURL='dsdsa'
            createdAt={new Date()}
            displayName='Vy'
          />
        </MessageListStyled>

        <div style={{ padding: '11px' }}>
          <FormStyled>
            <Form.Item>
              <Input
                variant='borderless'
                autoComplete='off'
                placeholder='Nhập tin nhắn'
              />
            </Form.Item>
            <Button type='primary'>Gửi</Button>
          </FormStyled>
        </div>
      </ContentStyled>
    </WrapperStyled>
  )
}

export default ChatWindow
