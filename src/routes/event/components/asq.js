/* eslint-disable */

import React from 'react';
import { Helmet } from 'react-helmet';
import { List, InputItem, Switch, DatePicker, Radio, Checkbox, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { get, pull, union } from 'lodash'
import AV from 'leancloud-storage'

import styles from './asq.less';
import Nav from '../../../components/nav-bar'
import QUESTIONS from '../../../constants/questions'
import CARDS from '../../../constants/cards'
import { browserHistory } from '../../../index'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
const RadioItem = Radio.RadioItem;
const Item = List.Item;
const Brief = Item.Brief;

class Asq extends React.Component {
  state = {
    birthDate: new Date(1990, 5, 6),
    skin: [],
    facial: [],
    body: [],
    card: [],
  };
  onSubmit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value, this.state);
      const Asq = AV.Object.extend('Asq');
      const asq = new Asq()
      asq.set('name', value.name)
      asq.set('birthDate', value.birthDate)
      asq.set('gender', value.gender ? 'female' : 'male')
      asq.set('phone', value.phone)
      asq.set('skin', this.state.skin)
      asq.set('facial', this.state.skin)
      asq.set('body', this.state.body)
      asq.set('card', this.state.card)
      asq.save().then((todo) => {
        console.log('objectId is ' + todo.id);
        browserHistory.push('/event/asq/result')
      }, function (error) {
        console.error(error);
      });
    });
  };
  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  };
  onValueChange = (...args) => {
    console.log(args);
  };
  onChangeCheckBox = (value, category, e) => {
    console.log('改变选择状态', value, category, e)
    const currentState = this.state[category]
    let nextState = []
    if (get(e, 'target.checked')) {
      nextState = union(currentState, [value])
    } else {
      pull(currentState, value)
      nextState = currentState
    }
    switch (category) {
      case 'skin':
        this.setState({
          skin: nextState,
        })
        break
      case 'facial':
        this.setState({
          facial: nextState,
        })
        break
      case 'body':
        this.setState({
          body: nextState,
        })
        break
      case 'card':
        this.setState({
          card: nextState,
        })
        break
      default:
        break
    }
  }

  render() {
    const { getFieldProps, getFieldValue } = this.props.form;
    return (
      <div className={styles.normal}>
        <Nav />
        <div className={styles.content}>
          <List renderHeader={() => '请认真填写您的信息'}>
            <InputItem
              {...getFieldProps('name')}
              placeholder="真实姓名"
            >姓名
            </InputItem>
            <List.Item
              extra={<Switch
                {...getFieldProps('gender', {
                  initialValue: true,
                  valuePropName: 'checked',
                })}
                onClick={(checked) => { console.log(checked); }}
              />}
            >{getFieldValue('gender') ? '女' : '男'}
            </List.Item>
            <InputItem
              {...getFieldProps('phone')}
              type="phone"
              placeholder="188 8888 8888"
            >手机号码
            </InputItem>
            <DatePicker
              mode="date"
              minDate={new Date(1930, 1, 1)}
              maxDate={new Date()}
              {...getFieldProps('birthDate', {
                initialValue: this.state.birthDate,
                rules: [
                  { required: true, message: '您必须选择一个日期' },
                  { validator: this.validateDatePicker },
                ],
              })}
            >
              <List.Item arrow="horizontal">生日</List.Item>
            </DatePicker>
          </List>
          <List renderHeader={() => '您最想改变的皮肤问题'}>
            {QUESTIONS.skin.map(i => (
              <CheckboxItem key={i.value} onChange={e => this.onChangeCheckBox(i.value, 'skin', e)}>
                {i.label}
              </CheckboxItem>
            ))}
          </List>
          <List renderHeader={() => '您最想改变的面部问题'}>
            {QUESTIONS.facial.map(i => (
              <CheckboxItem key={i.value} onChange={e => this.onChangeCheckBox(i.value, 'facial', e)}>
                {i.label}
              </CheckboxItem>
            ))}
          </List>
          <List renderHeader={() => '您最想改变的身体问题'}>
            {QUESTIONS.body.map(i => (
              <CheckboxItem key={i.value} onChange={e => this.onChangeCheckBox(i.value, 'body', e)}>
                {i.label}
              </CheckboxItem>
            ))}
          </List>
          {CARDS.map(i => (
            <div key={`card-plan-${i.name}`}>
              <List renderHeader={() => (<div className={styles['card-plan']}>
                <p>{i.name}</p><em>{i.price}</em>
                                         </div>)}
              >
                {i.detail.map((d, index) =>
                  (<Item
                    key={`card-detail-${i.name}-${index}`}
                    wrap
                    extra={d.price && `价值${d.price}`}
                  >
                    {d.desc}
                   </Item>))}
              </List>
              <AgreeItem
                key={i.value}
                onChange={e => this.onChangeCheckBox(i.value, 'card', e)}
              >
                我有意向办理{i.name}
              </AgreeItem>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <Button
            type="primary"
            icon="check-circle-o"
            style={{ borderRadius: 0 }}
            onClick={() => this.onSubmit()}
          >
            填写完整，确认提交
          </Button>
        </div>
      </div>
    );
  }
}

export default createForm()(Asq);
