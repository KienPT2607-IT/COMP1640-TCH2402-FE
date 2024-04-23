import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import reportApi from '../../api/report'
import { useEffect, useState } from "react";
const Home = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    const handler = async () => {
      const reportData = await reportApi.get();

      setData(reportData)
    }

    handler()
  }, [])


  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" amount={data.user_count} />
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        <div className="card margin-bottom-m">
          <h3>Top contribution có lượt like cao nhất</h3>
          <div>
            <table>
              <tr>
                <th>Event</th>
                <th>Contribution</th>
                <th>Số lượt like</th>
              </tr>
              {
                data?.top_liked_contributions?.map(item => {
                  return (
                    <tr>
                      <td>{item.event}</td>
                      <td>{item.contributor}</td>
                      <td>{item.like_count}</td>
                    </tr>
                  )
                })
              }

            </table>
          </div>
        </div>

        <div className="card margin-bottom-m">
          <h3>Top contribution có lượt dislike cao nhất</h3>
          <div>
            <table>
              <tr>
                <th>Event</th>
                <th>Contribution</th>
                <th>Số lượt dislike</th>
              </tr>
              {
                data?.top_disliked_contributions?.map(item => {
                  return (
                    <tr>
                      <td>{item.event}</td>
                      <td>{item.contributor}</td>
                      <td>{item.dislike_count}</td>
                    </tr>
                  )
                })
              }

            </table>
          </div>
        </div>


        <div className="card">
          <h3>Xếp hạng event</h3>
          <div>
            <table>
              <tr>
                <th>Tên event</th>
                <th>Contribution</th>
              </tr>
              {
                data?.top_events?.map(item => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.contribution_count}</td>
                    </tr>
                  )
                })
              }

            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
