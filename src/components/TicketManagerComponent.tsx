import React from 'react'
import '../scss/ticketManagerComponent.scss'
import Input from './Input'
function TicketManagerComponent() {
  return (
    <div className='ticket_manager_container'>
          <h2 className='ticket_manager_title'>Danh sách vé</h2>
          <div className='ticket_manager-head'>
                <Input/>
                <div className='ticker_manager-right'>
                  <div className='ticker_manager-right-item'>
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  <a href="" className='ticket_manager-filter'>Lọc vé</a>
                  </div>
                  <div className='ticker_manager-right-item'><a href="">Xuất file CSV</a></div>
                </div>
          </div>
          <div className='ticket_manager-body'>
          <table id="customers">
                  <tr>
                    <th>STT</th>
                    <th>Booking Code</th>
                    <th>Số vé</th>
                    <th>Tên sự kiện</th>
                    <th>Tính trạng sử dụng</th>
                    <th>Ngày sử dụng</th>
                    <th>Ngày xuất vé</th>
                    <th>Cổng check-in</th>
                  </tr>
                  {/* row */}
                  <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-used'>
                    <i className="fa-solid fa-circle"></i>
                      Đã sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                    {/* row */}
                    <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-used'>
                    <i className="fa-solid fa-circle"></i>
                      Đã sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                    {/* row */}
                    <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-expired'>
                    <i className="fa-solid fa-circle"></i>
                      Hết hạn</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                    {/* row */}
                    <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                      <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                      <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                      <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                    <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                      <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                      <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                      <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                      <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                      <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                      <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                    <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                    <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                      <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                    <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>    {/* row */}
                    <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>
                      {/* row */}
                      <tr>
                    <td>1</td>
                    <td>ALT20210501</td>
                    <td>123456789034</td>
                    <td>Hội chợ triển lãm tiêu dùng 2021</td>
                    <td className='row-not-used'>
                    <i className="fa-solid fa-circle"></i>
                      Chưa sử dụng</td>
                    <td>14/04/2021</td>
                    <td>14/04/2021</td>
                    <td>Cổng 1</td>
                  </tr>

              

                 
</table>

          </div>
          <div className='redirect-items'>
                <div className='redirect-item'><i className="fa-solid fa-angle-left"></i></div>
                <div className='redirect-item redirect-item--active'>1</div>
                <div className='redirect-item'><a href="">2</a></div>
                <div className='redirect-item'><a href="">3</a></div>
                <div className='redirect-item'><a href="">4</a></div>
                <div className='redirect-item'><a href="5"></a></div>
                <div className='redirect-item'><a href="">...</a></div>
                <div className='redirect-item'><a href="">20</a></div>
                <div className='redirect-item'><i className="fa-solid fa-angle-right"></i></div>
          </div>
    </div>
  )
}

export default TicketManagerComponent