class Api::V1::CompositionsController < ApplicationController

    def index
        compositions = Composition.all
        render json: CompositiionSerializer.new(compositions)
    end

    def create 
        composition = Composition.new(composition_params)

        artist  = Artist.find_or_create_by(name: composition_params[:artist_name] )
        #find or create artist method

        #composition.artist = artist
        #composition.artist_id = artist.id

        if composition.save
            render json: CompositionSerializer.new(composition), status: :accepted
          else
            render json: {errors: composition.errors.full_messages}, status: :unprocessible_entity
          end
    end

    def show 

    end

    private 

    def composition_params
        params.require(:composition).permit(:characters, :colors, :placements, :font_family, :artist_id)
    end

end
