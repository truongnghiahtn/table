import React, { Component } from 'react';

class form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            HoVaTen: "",
            PhongBan: "",
            ChucVu: "",
            Ngay: "",
            Sang: "",
            Chieu: "",
        }
    }










    render() {
        return (
            <div>


                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Ho va Ten</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            name="HoVaTen"

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>PhongBan</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            name="PhongBan"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>ChucVu</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            name="ChucVu"

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Ngay</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Ngay"

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Sang</label>
                                        <input
                                            type="number"
                                            min="0"
                                            max="1"
                                            required
                                            className="form-control"
                                            name="email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Chieu</label>
                                        <input
                                            type="number"
                                            min="0"
                                            max="1"
                                            required
                                            className="form-control"
                                            name="Chieu"
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>
                                        Submit
                  </button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default form;











