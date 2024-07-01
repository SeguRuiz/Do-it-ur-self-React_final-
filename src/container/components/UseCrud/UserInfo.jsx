const UserInfo = () => {
  return (
    <>
      <div className="info_Container">
        <div className="profileArea">
          <h1>Welcome Back!</h1>
        </div>
        <div className="optsionsArea">
          <div className="info_Area">
            <div className="user">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="35px"
                  viewBox="0 -960 960 960"
                  width="35px"
                  fill="#979da6"
                >
                  <path d="M146.67-80q-27 0-46.84-19.83Q80-119.67 80-146.67v-466.66q0-27 19.83-46.84Q119.67-680 146.67-680H380v-133.33q0-27 19.83-46.84Q419.67-880 446.94-880h66.12q27.27 0 47.11 19.83Q580-840.33 580-813.33V-680h233.33q27 0 46.84 19.83Q880-640.33 880-613.33v466.66q0 27-19.83 46.84Q840.33-80 813.33-80H146.67Zm0-66.67h666.66v-466.66H580v20q0 29.66-19.83 48.16-19.84 18.5-47.11 18.5h-66.12q-27.27 0-47.11-18.5Q380-563.67 380-593.33v-20H146.67v466.66Zm88-98H474V-260q0-17.67-9.17-31.83Q455.67-306 440.67-312q-28-10.33-46.84-14.17Q375-330 356-330q-20.33 0-41.5 4.5T268.67-312q-15.67 6-24.84 20.17-9.16 14.16-9.16 31.83v15.33Zm330.66-64.66H732v-53.34H565.33v53.34ZM356-362.67q23.33 0 39.67-16.33Q412-395.33 412-418.67q0-23.33-16.33-39.66-16.34-16.34-39.67-16.34-23.33 0-39.67 16.34Q300-442 300-418.67q0 23.34 16.33 39.67 16.34 16.33 39.67 16.33Zm209.33-62H732V-478H565.33v53.33ZM446.67-593.33h66.66v-220h-66.66v220ZM480-380Z" />
                </svg>
              </div>
              <p>User name</p>
            </div>
            <div className="user">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="35px"
                  viewBox="0 -960 960 960"
                  width="35px"
                  fill="#979da6"
                >
                  <path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z" />
                </svg>
              </div>
              <p>User email</p>
            </div>
          </div>
          <div className="destacados_Area">
            <div className="destacados_Title">
              <h2>Destacados</h2>
            </div>

            <div className="Destacados_Cotainer"></div>
          </div>
          <div className="Configuration_area"></div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
