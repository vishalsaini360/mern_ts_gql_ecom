import {Form, Wrapper,FormWrapper, Input, Button,Label} from './Category.style'

function Categorys() {
  return (
    <>
    <Wrapper>
        <Form>
            <FormWrapper>
                <Label>Category Name</Label>
                <Input type="text" />
            </FormWrapper>
            <FormWrapper>
            <Label>Category Image</Label>
                <Input type="file" />
            </FormWrapper>
            <Button type='button'>Add Category</Button>
        </Form>
    </Wrapper>
    </>
  )
}

export default Categorys