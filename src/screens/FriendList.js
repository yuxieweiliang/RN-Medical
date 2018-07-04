import React from 'react';
import {

    View,
    NativeAppEventEmitter,
    ListView,Image
} from 'react-native';
import {Container,Icon,ListItem,Text,Body,Right,Left} from 'native-base';
import {NimFriend} from 'react-native-netease-im';

export default class FriendList extends React.Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarButtonColor: 'white',
        statusBarTextColorScheme: 'light',
        statusBarColor: '#444',
        tabBarHidden: true,
        navBarBackgroundColor:"#444",
    };
    static navigatorButtons = {
        rightButtons:[{
            id:'add-friend',
            buttonColor:'#fff',
            title:'添加'
        }]
    };
    // 构造
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged:(s1,s2)=> s1 !== s2
        });
        this.state = {
            ds:ds.cloneWithRowsAndSections([]),
        };
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    }
    _onNavigatorEvent(event){
        const {navigator} = this.props;
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'add-friend') { // this is the same id field from the static navigatorButtons definition
                navigator.showModal({
                    screen:"ImDemo.SearchScreen",
                    animationType: 'slide-up',
                    passProps: {
                        onResult:function(result) {
                            navigator.push({
                                screen:'ImDemo.FriendDetail',
                                title:'详细资料',
                                passProps:{
                                    friendData:result
                                }
                            });
                        }
                    }
                });
            }
        }
    }

    componentWillMount() {
        NimFriend.startFriendList();

    }
    componentDidMount() {
        this.friendListener = NativeAppEventEmitter.addListener("observeFriend",(data)=>{
            this.setState({
                ds:this.state.ds.cloneWithRowsAndSections(this.formatData(data)),
            });
        });
    }
    formatData(data) {
        let newObj = {};
        let h = transform(data).sort();
        h.map(res=>{
            newObj[res] = data[res];
        });
        return newObj;
    }
    componentWillUnmount() {
        NimFriend.stopFriendList();
        this.friendListener && this.friendListener.remove();
    }
    toFriendDetail(id){
        NimFriend.getUserInfo(id).then((data)=>{
            this.props.navigator.push({
                screen:'ImDemo.FriendDetail',
                title:'详细资料',
                passProps:{
                    friendData:data
                }
            });
        })
    }
    _renderRow(res){
        return(
            <ListItem onPress={()=>this.toFriendDetail(res.contactId)}>
                <Image style={{width:35,height:35}} source={res.avatar ? {uri:res.avatar} : require('../images/discuss_logo.png')} />
                <Body>
                <Text>
                    {res.name}
                </Text>
                </Body>
            </ListItem>
        );
    }
    _renderSectionHeader(sectionData,sectionID){
        return (
            <ListItem itemDivider><Text>{sectionID}</Text></ListItem>
        );
    }
    render() {
        return (
            <Container style={{flex:1}}>
                <ListView
                    style={{backgroundColor:"#fff"}}
                    dataSource= {this.state.ds}
                    renderRow= {this._renderRow.bind(this)}
                    enableEmptySections= {true}
                    removeClippedSubviews= {true}
                    renderSectionHeader={this._renderSectionHeader.bind(this)}
                    renderHeader={()=>
                    <View>
                        <ListItem onPress={()=>this.props.navigator.push({
                            screen:'ImDemo.NewFriend',
                            title:'新的朋友',
                            navigatorButtons: {
                                rightButtons: [{
                                    id: 'search',
                                    color: '#fff',
                                    buttonColor:'#fff'
                                }]
                            }
                        })}>
                            <Body>
                            <Text>
                                新的朋友
                            </Text>
                            </Body>
                        </ListItem>
                        </View>
                    }
                />
            </Container>
        );
    }
}
function  transform(obj){
    var arr = [];
    for(var item in obj){
        arr.push(item);
    }
    arr.sort(mySorter);
    return arr;
}
function  mySorter(a, b){
    if (/^\d/.test(a) !== /^\D/.test(b)) return a > b ? 1 : (a = b ? 0 : -1);
    return a> b?-1:(a== b?0:1);
}