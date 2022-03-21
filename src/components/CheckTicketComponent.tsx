import React from 'react'
import '../scss/checkticketcomponent.scss'
import Input from './Input'
import TopBar from './TopBar'
function CheckTicketComponent() {
  return (
    <div className='check_ticket_component'>
            <div className='check_ticket_head'>
              <Input/>
              <button className='check_ticket_right'>Chốt đối soát</button>
            </div>
            <div className='check_ticket_body'>
                    <table id="customers">
                      <tr>
                        <th>STT</th>
                        <th>Số vé</th>
                        <th>Ngày sử dụng</th>
                        <th>Tên loại vé</th>
                        <th>Cổng check in</th>
                        <th><span></span></th>
                      </tr>
                      {/* row */}
                      <tr>
                        <td>1</td>
                        <td>205314876321</td>
                        <td>14/04/2021</td>
                        <td>Vé cổng</td>
                        <td>Cổng 1</td>
                        <td className='doisoat-active'>Đã đối soát</td>
                      </tr>
                        {/* row */}
                        <tr>
                        <td>1</td>
                        <td>205314876321</td>
                        <td>14/04/2021</td>
                        <td>Vé cổng</td>
                        <td>Cổng 1</td>
                        <td>Chưa đối soát</td>
                      </tr>
                        {/* row */}
                        <tr>
                        <td>1</td>
                        <td>205314876321</td>
                        <td>14/04/2021</td>
                        <td>Vé cổng</td>
                        <td>Cổng 1</td>
                        <td>Chưa đối soát</td>
                      </tr>
                        {/* row */}
                        <tr>
                        <td>1</td>
                        <td>205314876321</td>
                        <td>14/04/2021</td>
                        <td>Vé cổng</td>
                        <td>Cổng 1</td>
                        <td>Chưa đối soát</td>
                      </tr>
                        {/* row */}
                        <tr>
                        <td>1</td>
                        <td>205314876321</td>
                        <td>14/04/2021</td>
                        <td>Vé cổng</td>
                        <td>Cổng 1</td>
                        <td>Chưa đối soát</td>
                      </tr>
                        {/* row */}
                        <tr>
                        <td>1</td>
                        <td>205314876321</td>
                        <td>14/04/2021</td>
                        <td>Vé cổng</td>
                        <td>Cổng 1</td>
                        <td>Chưa đối soát</td>
                      </tr>
                        {/* row */}
                        <tr>
                        <td>1</td>
                        <td>205314876321</td>
                        <td>14/04/2021</td>
                        <td>Vé cổng</td>
                        <td>Cổng 1</td>
                        <td>Chưa đối soát</td>
                      </tr>
                        {/* row */}
                        <tr>
                        <td>1</td>
                        <td>205314876321</td>
                        <td>14/04/2021</td>
                        <td>Vé cổng</td>
                        <td>Cổng 1</td>
                        <td>Chưa đối soát</td>
                      </tr>
                   
                    </table>
                    <div className='check_filter_ticket'>
                            <h3 className=''>Lọc vé</h3>
                            <select id="select-options" style={{width:'100%',height:'40px,',outline:'none'}} >
                              <option className='option'>Hội chợ việc làm</option>
                         
                            </select>
                            <div className='check_filter_body'>
                                    <div className='check_filter_body_top'>
                                    <div className='check_filter_body_title'>Tình trạng đối soát</div>
                                    <div className='check_filter_body_radios'>
                                          <div className='check_filter_body_radio'><input type="radio" /><span>Tất cả</span></div>
                                          <div className='check_filter_body_radio'><input type="radio" /><span>Đã đối soát</span></div>
                                          <div className='check_filter_body_radio'><input type="radio" /><span>Chưa đối soát</span></div>
                                    </div>
                                    </div>
                                    <div className='check_filter_type'>
                                               <div>Loại vé</div>
                                                <div>Vé cổng</div>
                                    </div>
                                    <div className='check-from-date'>
                                        <div>Từ ngày</div>
                                        <input type="date" />
                                    </div>
                                    <div className='check-to-date'>
                                          <div>Đến ngày</div>
                                          <input type="date" />
                                    </div>
                                    <button className='btn-filter'>Lọc</button>
                            </div>

                    </div>
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

export default CheckTicketComponent