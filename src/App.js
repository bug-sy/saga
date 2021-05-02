import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>

      <Header as = "h1">Budget</Header>

      <Statistic size="small">
        <Statistic.Label>
          Your Balance:
        </Statistic.Label>
        <Statistic.Label>
          266666
        </Statistic.Label>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{textAlign:"left"}}>
                  Income :
                </Statistic.Label>
                <Statistic.Value>
                  1067.00
                </Statistic.Value>
              </Statistic>

            </Grid.Column>
            <Grid.Column>
              
            <Statistic size="tiny" color="red">
                <Statistic.Label style={{textAlign:"left"}}>
            Expenses:
                </Statistic.Label>
                <Statistic.Value>
                  600.00
                </Statistic.Value>
              </Statistic>
              </Grid.Column> 
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">
        History
      </Header>

      <Segment color="red">
        <Grid columns={3} textAlign="right" divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid columns={3} textAlign="right" divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something Else
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $5.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right" divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something Else
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $50.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>


<Header as="h3">
  Add new transaction
  </Header>
  <Form unstackable>
    <Form.Group>
      <Form.Input placeholder="New Shiny thing"
      icon="tags"
      width={12}
      label="Descriptin"
      
      />
      <Form.Input
      width={4}
label="Value"
placeholder="100.00"
icon="dollar"
iconPosition="left"
/>
    </Form.Group>
    <Button.Group style={{marginTop:20}}>
      <Button>
        Cancel
      </Button>
      <Button.Or/>
      <Button primary>
        Okay
      </Button>
    </Button.Group>
  </Form>
    </Container>
  );

}

export default App;
