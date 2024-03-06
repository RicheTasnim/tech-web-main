import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 text-center">
                    <div className="card p-3 bg-light mb-4">
                        <div className="text-center text-white bg-secondary mb-2 mt-2">
                            <h2>Welcome to Admin Dashboard</h2>
                        </div>
                    </div>
                    <div className="card p-3 bg-light">
                        <div className="card-body">

                            <div className="mb-3">
                                <Link to='/admin/products' className='btn btn-primary btn-lg btn-block'>Manage Products</Link>
                            </div>


                            <div className="mb-3">
                                <Link to='/admin/orderviews' className='btn btn-primary btn-lg btn-block'>Manage Orders</Link>
                            </div>


                            <div className="mb-3">
                                <Link to='/admin/career' className='btn btn-primary btn-lg btn-block'>Manage Career</Link>
                            </div>

                            <div className="mb-3">
                                <Link to='/news/manage-post' className='btn btn-primary btn-lg btn-block'>Manage News</Link>
                            </div>


                            <div className="mb-3">
                                <Link to='/news/post-news' className='btn btn-primary btn-lg btn-block'>Post News</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;



