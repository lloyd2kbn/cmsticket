import React from 'react'
import '../scss/settingTicketComponent.scss'
import Input from './Input'

function SettingTicketComponent() {
  return (
    <div className='setting_ticket_component'>
          <h3 className='setting_ticket_title'>Danh sách gói vé</h3>
          <div className='input_flex_component'>
                <Input/>
                <div className='button_groups'>
                      <button className='button_item--transparent'>Xuất file(.csv)</button>
                      <button className='button_item--primary'>Thêm gói vế</button>
                </div>
          </div>
         <div className='setting_ticket_component_body'>
         <table id="customers">
          <tr>
              <td>1</td>
              <td>ALT20210501</td>
              <td>Gói gia đình</td>
              <td>14/04/2021 08:00:00</td>
              <td>14/04/2021 23:00:00</td>
              <td>90.000 VNĐ</td>
              <td>360.000 VNĐ/4 Vé</td>
              <td className='ticket_off'><i className="fa-solid fa-circle"></i>Tắt</td>
              <td className='setting_update'>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 2.49998C11.8978 2.10216 12.4374 1.87866 13 1.87866C13.5626 1.87866 14.1022 2.10216 14.5 2.49998C14.8978 2.89781 15.1213 3.43737 15.1213 3.99998C15.1213 4.56259 14.8978 5.10216 14.5 5.49998L5 15L1 16L2 12L11.5 2.49998Z" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

                Cập nhật</td>
            </tr>
            <tr>
              <td>1</td>
              <td>ALT20210501</td>
              <td>Gói gia đình</td>
              <td>14/04/2021 08:00:00</td>
              <td>14/04/2021 23:00:00</td>
              <td>90.000 VNĐ</td>
              <td>360.000 VNĐ/4 Vé</td>
              <td className='ticket_off'><i className="fa-solid fa-circle"></i>Tắt</td>
              <td className='setting_update'>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 2.49998C11.8978 2.10216 12.4374 1.87866 13 1.87866C13.5626 1.87866 14.1022 2.10216 14.5 2.49998C14.8978 2.89781 15.1213 3.43737 15.1213 3.99998C15.1213 4.56259 14.8978 5.10216 14.5 5.49998L5 15L1 16L2 12L11.5 2.49998Z" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

                Cập nhật</td>
            </tr>
            <tr>
              <td>1</td>
              <td>ALT20210501</td>
              <td>Gói gia đình</td>
              <td>14/04/2021 08:00:00</td>
              <td>14/04/2021 23:00:00</td>
              <td>90.000 VNĐ</td>
              <td>360.000 VNĐ/4 Vé</td>
              <td className='ticket_off'><i className="fa-solid fa-circle"></i>Tắt</td>
              <td className='setting_update'>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 2.49998C11.8978 2.10216 12.4374 1.87866 13 1.87866C13.5626 1.87866 14.1022 2.10216 14.5 2.49998C14.8978 2.89781 15.1213 3.43737 15.1213 3.99998C15.1213 4.56259 14.8978 5.10216 14.5 5.49998L5 15L1 16L2 12L11.5 2.49998Z" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

                Cập nhật</td>
            </tr>
            <tr>
              <td>1</td>
              <td>ALT20210501</td>
              <td>Gói gia đình</td>
              <td>14/04/2021 08:00:00</td>
              <td>14/04/2021 23:00:00</td>
              <td>90.000 VNĐ</td>
              <td>360.000 VNĐ/4 Vé</td>
              <td className='ticket_off'><i className="fa-solid fa-circle"></i>Tắt</td>
              <td className='setting_update'>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 2.49998C11.8978 2.10216 12.4374 1.87866 13 1.87866C13.5626 1.87866 14.1022 2.10216 14.5 2.49998C14.8978 2.89781 15.1213 3.43737 15.1213 3.99998C15.1213 4.56259 14.8978 5.10216 14.5 5.49998L5 15L1 16L2 12L11.5 2.49998Z" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

                Cập nhật</td>
            </tr>
            <tr>
              <td>1</td>
              <td>ALT20210501</td>
              <td>Gói gia đình</td>
              <td>14/04/2021 08:00:00</td>
              <td>14/04/2021 23:00:00</td>
              <td>90.000 VNĐ</td>
              <td>360.000 VNĐ/4 Vé</td>
              <td className='ticket_using'><i className="fa-solid fa-circle"></i>Đang sử dụng</td>
                              <td className='setting_update'><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.5 2.49998C11.8978 2.10216 12.4374 1.87866 13 1.87866C13.5626 1.87866 14.1022 2.10216 14.5 2.49998C14.8978 2.89781 15.1213 3.43737 15.1213 3.99998C15.1213 4.56259 14.8978 5.10216 14.5 5.49998L5 15L1 16L2 12L11.5 2.49998Z" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
              Cập nhật</td>
            </tr>
           
          </table>

         </div>

          {/*  */}
          <div className='redirect-items'>
                <div className='redirect-item'><i className="fa-solid fa-angle-left"></i></div>
                <div className='redirect-item redirect-item--active'>1</div>
                <div className='redirect-item'><a href="">2</a></div>
                <div className='redirect-item'><a href="">3</a></div>
                <div className='redirect-item'><a href="">4</a></div>
                <div className='redirect-item'><a href="">5</a></div>
                <div className='redirect-item'><a href="">...</a></div>
                <div className='redirect-item'><a href="">20</a></div>
                <div className='redirect-item'><i className="fa-solid fa-angle-right"></i></div>
          </div>
    </div>
  )
}

export default SettingTicketComponent