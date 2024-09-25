import { useEffect, useState } from "react";
import { TrainingModel } from "../../../model/TrainingModel";
import { DisplayTraining } from "./DisplayTraining";
import { Pagination } from "../../../utils/Pagination";
import { Link } from "react-router-dom";

export const Training = () => {
  const [training, setTraining] = useState<TrainingModel[]>([]);
  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [trainingPerPage] = useState(8);
  const [totalAmountOfTraining, setTotalAmountOfTraining] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const [searchUrl, setSearchUrl] = useState('');
  const [statusSelection, setStatusSelection] = useState('Status');
  const [categorySelection, setCategorySelection] = useState('Category');

  useEffect(() => {
    const fetchTraining = async () => {
      const baseUrl: string = "http://localhost:8089/training";

      let url ='';

      if (searchUrl === '') {
        url = `${baseUrl}?page=${currentPage - 1}&size=${trainingPerPage}`;
    } else {
        let searchPage = searchUrl.replace('<pageNumber>', `${currentPage - 1}`);
        url = baseUrl + searchPage;
    }

      const response = await fetch(url);
      

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();
      const responseData = responseJson.content;

      setTotalAmountOfTraining(responseJson.totalElements);
      setTotalPages(responseJson.totalPages);

      const loadedTraining: TrainingModel[] = [];

      for (const key in responseData) {
        loadedTraining.push({
          trainingCode: responseData[key].trainingCode,
          name: responseData[key].name,
          description: responseData[key].description,
          dateTime: responseData[key].dateTime,
          maxParticipantsNumber: responseData[key].maxParticipantsNumber,
          participantsNumber: responseData[key].participantsNumber,
          status: responseData[key].status,
          category: responseData[key].category,
          trainingMemberList: responseData[key].trainingMemberList,
        });
      }
      setTraining(loadedTraining);
      setLoader(false);
    };
    fetchTraining().catch((error) => {
      setLoader(false);
      setErrors(error.response.data.message);
    });
    window.scrollTo(0, 0);
  }, [currentPage, searchUrl]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div className="container m-5">
        <p>{error}</p>
      </div>
    );
  }

  const categoryField = (value: string) => {
    setCurrentPage(1);
    setStatusSelection("ALL")

    if(
        value === "FBW"   ||
        value === "CARDIO" ||
        value === "CHEST" ||
        value === "BICEPS_TRICEPS" ||
        value === "LEGS" ||
        value === "ABS" || 
        value === "ARM" || 
        value === "BACK"){
            setCategorySelection(value);
            setSearchUrl(`/category?category=${value}&page=<pageNumber>&size=${trainingPerPage}`)
        } else {
            setCategorySelection("ALL");
            setSearchUrl(`?page=<pageNumber>&size=${trainingPerPage}`)
        }
  }

  const statusField = (value: string) => {
    setCurrentPage(1);
    setCategorySelection("ALL")

    if(
        value === "ACTIVE"   ||
        value === "INACTIVE" ||
        value === "FULL"){
            setStatusSelection(value);
            setSearchUrl(`/status?status=${value}&page=<pageNumber>&size=${trainingPerPage}`)
        } else {
            setStatusSelection('ALL');
            setSearchUrl(`?page=<pageNumber>&size=${trainingPerPage}`)
        }
  }

  const indexOfLastTraining: number = currentPage * trainingPerPage;
  const indexOfFirstTraining: number = indexOfLastTraining - trainingPerPage;
  let lastItem =
    trainingPerPage * currentPage <= totalAmountOfTraining
      ? trainingPerPage * currentPage
      : totalAmountOfTraining;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-5">
            <div className="col-2">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {categorySelection}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li onClick={() => categoryField('ALL')}>
                    <a className="dropdown-item" href="#">
                      ALL
                    </a>
                  </li>
                  <li onClick={() => categoryField('FBW')}>
                    <a className="dropdown-item" href="#">
                      FBW
                    </a>
                  </li>
                  <li onClick={() => categoryField('CARDIO')}>
                    <a className="dropdown-item" href="#">
                      CARDIO
                    </a>
                  </li>
                  <li onClick={() => categoryField('BACK')}>
                    <a className="dropdown-item" href="#">
                      BACK
                    </a>
                  </li>
                  <li onClick={() => categoryField('CHEST')}>
                    <a className="dropdown-item" href="#">
                      CHEST
                    </a>
                  </li>
                  <li onClick={() => categoryField('BICEPS_TRICEPS')}>
                    <a className="dropdown-item" href="#">
                      BICEPS_TRICEPS
                    </a>
                  </li>
                  <li onClick={() => categoryField('LEGS')}>
                    <a className="dropdown-item" href="#">
                      LEGS
                    </a>
                  </li>
                  <li onClick={() => categoryField('ABS')}>
                    <a className="dropdown-item" href="#">
                      ABS
                    </a>
                  </li>
                  <li onClick={() => categoryField('ARM')}>
                    <a className="dropdown-item" href="#">
                      ARM
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {statusSelection}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton2"
                >
                    <li onClick={() => statusField('ALL')}>
                    <a className="dropdown-item" href="#">
                      ALL
                    </a>
                  </li>
                  <li onClick={() => statusField('ACTIVE')}>
                    <a className="dropdown-item" href="#">
                      ACTIVE
                    </a>
                  </li>
                  <li onClick={() => statusField('INACTIVE')}>
                    <a className="dropdown-item" href="#">
                      INACTIVE
                    </a>
                  </li>
                  <li onClick={() => statusField('FULL')}>
                    <a className="dropdown-item" href="#">
                      FULL
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {totalAmountOfTraining > 0 ? (
            <>
              <div className="mt-3 ">
                <h5>Number of results: ({totalAmountOfTraining})</h5>
              </div>
              <p>
                {indexOfFirstTraining + 1} to {lastItem} of{" "}
                {totalAmountOfTraining} training:
              </p>
              {training.map((training) => (
                <DisplayTraining
                  training={training}
                  key={training.trainingCode}
                />
              ))}
            </>
          ) : (
            <div className="m-5">
              <h3>We didn't find what you wanted.</h3>
              <div>
                <Link
                  type="button"
                  className="btn btn-sm btn-primary"
                  to="/home"
                >Back to home</Link>
              </div>
            </div>
          )}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          )}
        </div>
      </div>
    </div>
  );
};
