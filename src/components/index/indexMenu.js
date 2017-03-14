import React , { Component } from 'react';
import {cyan500,grey700} from "material-ui/styles/colors";
import './index.scss';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

class newCom extends Component{
    constructor(props){
        super(props);
    }
        
    render(){
        return (
            <div>
                <ul className="func_ul">
                    <li className="func_ul_li">
                        <div className="func_tag_div">
                            <svg fill={grey700}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"/>
                        </svg>
                        </div>
                        <p className="func_tag_p">
                            <span>会员管理</span>
                        </p>
                    </li>
                    <li className="func_ul_li">
                        <div className="func_tag_div">
                                <svg fill={grey700} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                                </svg>
                        </div>
                        <p className="func_tag_p">
                            <span>促销管理</span>
                        </p>
                    </li>
                    <li className="func_ul_li">
                        <div className="func_tag_div">
                            <svg fill={grey700} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                            </svg>
                        </div>
                       
                        <p className="func_tag_p">
                            <span>商品管理</span>
                        </p>
                    </li>
                </ul>
                <ul className="func_ul">
                    <li className="func_ul_li">
                        <div className="func_tag_div">
                            <svg fill={grey700} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"/>
                            </svg>
                        </div>
                        <p className="func_tag_p">
                            <span>店铺管理</span>
                        </p>
                    </li>
                    <li className="func_ul_li">
                        <div className="func_tag_div">
                            <svg fill={grey700} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/>
                                <path d="M7 7.07L8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07zM12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1zm2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13zM15 20H9v-8h6v8z"/>
                            </svg>
                        </div>
                        <p className="func_tag_p">
                            <span>商户入网</span>
                        </p>
                    </li>
                    <li className="func_ul_li">
                        <div className="func_tag_div">
                            <svg fill={grey700} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z"/>
                            </svg>
                        </div>
                        <p className="func_tag_p">
                            <span>库存管理</span>
                        </p>
                    </li>
                </ul>
                <ul className="func_ul">
                    <li className="func_ul_li">
                        <div className="func_tag_div">
                            <svg fill={grey700} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                            </svg>
                        </div>
                        <p className="func_tag_p">
                            <span>统计管理</span>
                        </p>
                    </li>
                    <li className="func_ul_li">
                    </li>
                    <li className="func_ul_li"></li>
                </ul>
            </div>
        );
    }
}

export default newCom;