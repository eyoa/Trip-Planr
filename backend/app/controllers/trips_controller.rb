class TripsController < ApplicationController
  
  # GET /trips
  def index
    @trips = Trip.all
    render 'trips/index.json.jb'
  end

  # GET /trips/1
  def show
    
    @trip = Trip.find params[:id]

    render 'trips/show.json.jb'

    @mock = [
      {
        name: 'Toronto meetup',
        user_id: 2,
        start_date: '',
        end_date: '',
        collaborators: [1, 5],
        days: [
          {
            name: 'Day1',
            order: 1,
            entries: [
              {
                name: 'ROM',
                img_url: '/img/rom.jpeg',
                start_time: '11:00 am',
                end_time: '3:00 pm',
                url: 'http://example.org',
                activity_id: 1
              },
              {
                name: 'Restaurant',
                img_url: '/img/activityImg.jpg',
                start_time: '6:00pm',
                end_time: '7:00 pm',
                url: 'http://example.org',
                activity_id: 4
              },
              {
                name: 'Restaurant',
                img_url: '/img/activityImg.jpg',
                start_time: '6:00pm',
                end_time: '7:00 pm',
                url: 'http://example.org',
                activity_id: 4
              },
              {
                name: 'Restaurant',
                img_url: '/img/activityImg.jpg',
                start_time: '6:00pm',
                end_time: '7:00 pm',
                url: 'http://example.org',
                activity_id: 4
              },
              {
                name: 'Restaurant',
                img_url: '/img/activityImg.jpg',
                start_time: '6:00pm',
                end_time: '7:00 pm',
                url: 'http://example.org',
                activity_id: 4
              }
            ]
          },
          {
            name: 'Day2',
            order: 1,
            entries: [
              {
                name: 'Another Restaurant',
                img_url: '/img/activityImg.jpg',
                start_time: '11:00am',
                end_time: '3:00 pm',
                url: 'http://example.org'
              }
            ]
          }
        ]
      },
      {
        name: 'Toronto Cousins',
        user_id: 2,
        start_date: '',
        end_date: '',
        collaborators: [],
        days: [
          {
            name: 'Day1',
            order: 1,
            entries: [
              {
                name: 'ROM',
                img_url: '/img/rom.jpeg',
                start_time: '11:00 am',
                end_time: '3:00 pm',
                url: 'http://example.org',
                activity_id: 1
              }
            ]
          }
        ]
      }
    ]

    # render json: mock.to_json
  end

  # POST /trips
  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      puts "new trip made"
    else
      puts "didn't work reload?"
    end
  end

  private

  def trip_params
    params.permit(:name, :user_id, :start_date, :end_date)
  end


end
