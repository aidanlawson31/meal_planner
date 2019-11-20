import React, { Component } from 'react';
import { Modal, Button, Input, Row, Col, Card} from 'antd';
const { TextArea } = Input;
const { Meta }     = Card;

export default class Meal extends Component {
  constructor(props){
    super(props)
      this.state = {
        title: "",
        description: "",
        price: "",
        size: "large",

        visible: false
      }
      console.log(this.state);
    }

  openModal = meal => {
    this.setState({
        visible: true,
        title: meal.title,
        description: meal.description
    });
  };

  closeModal = () => {
    this.setState({
      visible: false
    });
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  
  logChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    handleEdit = e => {
      e.preventDefault();
      // create a variable that should be passed to the database
      var meal = {
          title: this.state.title,
          description: this.state.description
      };
      this.setState(meal)

    }

  //   fetchMeals = async (meals) => {
  //     this.props.handleMeals(meals)
  //   }


  // // onViewMore = () => {

  // // }
  //     componentDidMount() {
  //       this.fetchMeals();
  //   }
  render() {
    const { size } = this.state;
    const { meals } = this.props;

    return(
      <div>
        <Row>
          {meals.map(meal => (
            <div>
              <Col span={6}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://www.anita.com/blog/us/wp-content/uploads/sites/3/2016/02/blog-success.jpg" />}
                >
                  <Meta 
                  title={meal.title} 
                  description={meal.description} />
                  <Button type="primary" onClick={() => this.openModal(meal)}>
                    Edit
                  </Button>
                  <Button type="danger" style={{ margin: "0 20px" }} onClick={() => this.remove(meal)}> Delete </Button>
                </Card>
              </Col>
              <Modal
                visible={this.state.visible}
                onOk={this.handleEdit}
                onCancel={this.closeModal}
              >
              <form method="POST">
                <Input
                  placeholder="Title"
                  allowClear
                  name="title"
                  value={this.state.title}
                  onChange={this.logChange}
                />
                <br />
                <br />
                <TextArea
                  placeholder="Description"
                  allowClear
                  name="description"
                  value={this.state.description}
                  onChange={this.logChange}
                />
              </form>
              </Modal>
            </div>
          ))}
        </Row>
      </div> 
      // <div>
      //    <Card
      //       style={{ width: 300 }}
      //       cover={
      //         <img
      //           alt="example"
      //           src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      //         />
      //       }
      //       actions={[
      //         <Button type="primary">View meal</Button>,
      //         <Button type="primary" icon="shopping-cart"> </Button>

      //       ]}
      //     >
      //       <Meta
      //         title="Meal name"
      //         description="Meal description"
      //         description="Meal Price"
      //       />

      //   </Card>
      // </div>
    )
  }
}
