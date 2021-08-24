class Api::V1::CompositionsController < ApplicationController

    def index
        compositions = Composition.all
        render json: CompositiionSerializer.new(compositions)
    end

    def create 
        composition = Composition.new(composition_params)

        #find or create artist method

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
